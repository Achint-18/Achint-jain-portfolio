"use client";

import { useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";

export default function ChessWidget() {
  // 5x5 tactical micro-board for sleek aesthetic
  const BOARD_SIZE = 5;
  const [knightPos, setKnightPos] = useState<[number, number]>([2, 2]); // center
  const [moveCount, setMoveCount] = useState(0);

  // Legal knight moves: 2 in one dir, 1 in the other
  const getLegalMoves = (r: number, c: number) => {
    const deltas = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];
    return deltas
      .map(([dr, dc]) => [r + dr, c + dc] as [number, number])
      .filter(([nr, nc]) => nr >= 0 && nr < BOARD_SIZE && nc >= 0 && nc < BOARD_SIZE);
  };

  const legalMoves = getLegalMoves(knightPos[0], knightPos[1]);

  const isLegalMove = (r: number, c: number) => {
    return legalMoves.some(([lr, lc]) => lr === r && lc === c);
  };

  const handleSquareClick = (r: number, c: number) => {
    if (isLegalMove(r, c)) {
      setKnightPos([r, c]);
      setMoveCount((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setKnightPos([2, 2]);
    setMoveCount(0);
  };

  return (
    <div className="p-5 rounded-2xl bg-[#0e0f16]/80 border border-white/[0.08] backdrop-blur-sm flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-3 text-xs">
        <span className="font-mono text-zinc-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          Tactical Micro-Board (Knight&apos;s Tour)
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-zinc-500">
            Moves: <span className="text-white font-medium">{moveCount}</span>
          </span>
          <button
            onClick={handleReset}
            title="Reset position"
            className="p-1 text-zinc-400 hover:text-white rounded hover:bg-white/[0.05]"
            aria-label="Reset knight position"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Chess Grid */}
      <div className="grid grid-cols-5 gap-1 p-2 rounded-xl bg-black/60 border border-white/[0.06] shadow-inner">
        {Array.from({ length: BOARD_SIZE }).map((_, r) =>
          Array.from({ length: BOARD_SIZE }).map((_, c) => {
            const isKnight = knightPos[0] === r && knightPos[1] === c;
            const isTarget = isLegalMove(r, c);
            const isDark = (r + c) % 2 === 1;

            return (
              <button
                key={`${r}-${c}`}
                onClick={() => handleSquareClick(r, c)}
                disabled={!isTarget && !isKnight}
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center font-mono text-sm transition-all duration-200 relative ${
                  isKnight
                    ? "bg-sky-500/30 border-2 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    : isTarget
                    ? "bg-teal-500/10 border border-teal-400/40 hover:bg-teal-500/25 cursor-pointer scale-95 hover:scale-100"
                    : isDark
                    ? "bg-white/[0.03] border border-transparent"
                    : "bg-white/[0.07] border border-transparent"
                }`}
                aria-label={`Square ${String.fromCharCode(65 + c)}${BOARD_SIZE - r}`}
              >
                {isKnight ? (
                  <span className="text-lg sm:text-xl drop-shadow select-none animate-scale-in">
                    ♞
                  </span>
                ) : isTarget ? (
                  <span className="w-2 h-2 rounded-full bg-teal-400/80 animate-ping" />
                ) : null}
              </button>
            );
          })
        )}
      </div>

      <p className="text-[11px] font-mono text-zinc-400 mt-3 text-center">
        Click any highlighted square to calculate and execute the Knight&apos;s next move.
      </p>
    </div>
  );
}
