import React, { useState } from "react";

// 타입 정의
interface Monster {
  id: string;
  name: string;
  type: string; // "fire", "water", "grass" 등의 타입
}

// 몬스터 데이터
const monsters: Monster[] = [
  { id: "1", name: "Fire Monster", type: "fire" },
  { id: "2", name: "Water Monster", type: "water" },
  { id: "3", name: "Grass Monster", type: "grass" },
];

// 드래그 가능한 몬스터 컴포넌트
const DraggableMonster: React.FC<{
  monster: Monster;
  onDragStart: (e: React.DragEvent, monster: Monster) => void;
}> = ({ monster, onDragStart }) => {
  return (
    <div
      id={monster.id}
      draggable
      onDragStart={(e) => onDragStart(e, monster)}
      style={{
        padding: "10px",
        backgroundColor: "lightgray",
        margin: "5px",
        cursor: "move",
      }}
    >
      {monster.name}
    </div>
  );
};

// 타입별 테이블
const MonsterTable: React.FC<{
  type: string;
  monsters: Monster[];
  onDrop: (e: React.DragEvent, type: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragStart: (e: React.DragEvent, monster: Monster) => void;
}> = ({ type, monsters, onDrop, onDragOver, onDragStart }) => {
  return (
    <div
      onDrop={(e) => onDrop(e, type)}
      onDragOver={onDragOver}
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "200px",
        minHeight: "300px",
        backgroundColor: "white",
        margin: "10px",
      }}
    >
      <h3>{type}</h3>
      {monsters
        .filter((monster) => monster.type === type)
        .map((monster) => (
          <DraggableMonster
            key={monster.id}
            monster={monster}
            onDragStart={onDragStart}
          />
        ))}
    </div>
  );
};

// 최상위 앱 컴포넌트
const App: React.FC = () => {
  const [monsterList, setMonsterList] = useState<Monster[]>(monsters);
  const [draggedMonster, setDraggedMonster] = useState<Monster | null>(null);
  const [draggedFromType, setDraggedFromType] = useState<string | null>(null);

  // 드래그 시작 시 호출
  const handleDragStart = (e: React.DragEvent, monster: Monster) => {
    setDraggedMonster(monster);
    setDraggedFromType(monster.type); // 드래그한 몬스터의 원래 타입 저장
    // 드래그할 아이템의 ID를 데이터로 설정
    e.dataTransfer.setData("monsterId", monster.id);
  };

  // 드래그한 아이템을 테이블로 드롭 시 호출
  const handleDrop = (e: React.DragEvent, type: string) => {
    e.preventDefault();
    if (draggedMonster) {
      // 드래그한 몬스터를 새로운 타입으로 업데이트
      setMonsterList((prevState) =>
        prevState.map((monster) =>
          monster.id === draggedMonster.id ? { ...monster, type } : monster
        )
      );
      setDraggedMonster(null); // 드래그 종료 후 초기화
      setDraggedFromType(null); // 드래그 시작 지점 초기화
    }
  };

  // 드래그 오버 시 기본 동작 방지
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: "flex" }}>
      {/* 몬스터 아이템 목록 */}
      <div style={{ padding: "20px", width: "300px" }}>
        <h3>Available Monsters</h3>
        {monsterList.map((monster) => (
          <DraggableMonster
            key={monster.id}
            monster={monster}
            onDragStart={handleDragStart}
          />
        ))}
      </div>

      {/* 타입별 테이블 */}
      <MonsterTable
        type="fire"
        monsters={monsterList}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragStart={handleDragStart}
      />
      <MonsterTable
        type="water"
        monsters={monsterList}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragStart={handleDragStart}
      />
      <MonsterTable
        type="grass"
        monsters={monsterList}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragStart={handleDragStart}
      />
    </div>
  );
};

export default App;
