// =========================  QuizPage.jsx  =========================
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import courses from "../data/courses.json"; // <-- dummy data JSON (unchanged)
import { Clock } from "lucide-react";

export default function QuizPage() {
  /* -------------------- query params -------------------- */
  const params = useSearchParams();
  const subject = params.get("subject");
  const level = params.get("level");
  const lessonId = params.get("lesson");

  /* -------------------- fetch lesson -------------------- */
  const lesson = courses?.[subject]?.[level]?.find(
    (item) => String(item.id) === lessonId
  );

  /* -------------------- state -------------------- */
  const [cur, setCur] = useState(0);
  const [ans, setAns] = useState({}); // { [q.id]: val | string[] }
  const [time, setTime] = useState(300); // 5‑min countdown
  const [done, setDone] = useState(false);
  const router = useRouter();

  if (!lesson)
    
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">
        Lesson not found.
      </div>
    );

  const qArr = lesson.quiz;
  const total = qArr.length;
  const q = qArr[cur];
  const pct = ((cur + 1) / total) * 100;

  /* -------------------- timer -------------------- */
  useEffect(() => {
    const t = setInterval(() => {
      setTime((p) => {
        if (p <= 1) {
          submit();
          return 0;
        }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  /* -------------------- answer helpers -------------------- */
  const setA = (id, val) => setAns((p) => ({ ...p, [id]: val }));

  const canNext = ans[q.id] !== undefined && ans[q.id] !== null && ans[q.id] !== "";

  const next = () => (cur < total - 1 ? setCur(cur + 1) : submit());
  const prev = () => cur > 0 && setCur(cur - 1);

  /* -------------------- scoring -------------------- */
  const scorePct = () => {
    let correct = 0;
    qArr.forEach((qq) => {
      const a = ans[qq.id];
      if (qq.type === "multiple") {
        const ok =
          Array.isArray(a) &&
          a.length === qq.answer.length &&
          a.every((x) => qq.answer.includes(x));
        if (ok) correct++;
      } else {
        if (a == qq.answer) correct++;
      }
    });
    return Math.round((correct / total) * 100);
  };

  const submit = () => setDone(true);

  /* -------------------- UI -------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6 sm:p-10">
      {/* header */}
      <header className="max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row justify-between gap-4 items-center">
        <div>
          <h1 className="text-2xl font-bold">{lesson.title} Quiz</h1>
          <p className="text-xs text-gray-300">Time Left: {fmt(time)}</p>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center text-orange-400 font-mono">
            <Clock className="w-4 h-4 mr-1" /> {fmt(time)}
          </span>
          <span className="text-green-400 font-semibold text-sm">
            {cur + 1}/{total}
          </span>
        </div>
      </header>

      {/* progress bar */}
      <div className="h-2 bg-white/20 w-full max-w-4xl mx-auto mb-8 rounded-full overflow-hidden">
        <div className="h-full bg-green-400 transition-all" style={{ width: `${pct}%` }} />
      </div>

      {/* main card */}
      <main className="max-w-4xl mx-auto space-y-8">
        {!done ? (
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 shadow space-y-6">
            <h2 className="text-xl font-semibold">
              Q{cur + 1}: {q.question}
            </h2>

            {/* single / boolean */}
            {(q.type === "single" || q.type === "boolean") && (
              <ul className="space-y-3">
                {q.options.map((opt, i) => (
                  <li
                    key={i}
                    onClick={() => setA(q.id, String(i))}
                    className={`flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-indigo-600/30 ${
                      ans[q.id] == i ? "bg-purple-500/30" : ""
                    }`}
                  >
                    <input type="radio" readOnly checked={ans[q.id] == i} className="accent-purple-500" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* multiple */}
            {q.type === "multiple" && (
              <ul className="space-y-3">
                {q.options.map((opt, i) => {
                  const sel = Array.isArray(ans[q.id]) ? ans[q.id] : [];
                  const chk = sel.includes(String(i));
                  const toggle = () => {
                    const upd = chk ? sel.filter((x) => x !== String(i)) : [...sel, String(i)];
                    setA(q.id, upd);
                  };
                  return (
                    <li
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-indigo-600/30 ${
                        chk ? "bg-purple-500/30" : ""
                      }`}
                      onClick={toggle}
                    >
                      <input type="checkbox" readOnly checked={chk} className="accent-purple-500" />
                      <span>{opt}</span>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* nav */}
            <div className="flex justify-between pt-4">
              <button
                onClick={prev}
                disabled={cur === 0}
                className="px-4 py-2 border border-gray-500 rounded disabled:opacity-40"
              >
                Previous
              </button>
              <button
                onClick={next}
                disabled={!canNext}
                className={`px-6 py-2 rounded font-medium ${
                  cur === total - 1 ? "bg-green-500 hover:bg-green-600 text-black" : "bg-purple-500 hover:bg-purple-600"
                } disabled:opacity-40`}
              >
                {cur === total - 1 ? "Submit Quiz" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          /* ---------------- Results section ---------------- */
          <>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-2 text-green-400">
                Score: {scorePct()}%
              </h2>
              <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-400"
                  style={{ width: `${scorePct()}%` }}
                />
              </div>
            </div>

            {/* detailed review */}
            <section className="space-y-6">
              {qArr.map((qq, idx) => {
                const sel = ans[qq.id];
                const right =
                  qq.type === "multiple"
                    ? Array.isArray(sel) &&
                      sel.length === qq.answer.length &&
                      sel.every((x) => qq.answer.includes(x))
                    : sel == qq.answer;

                return (
                  <div
                    key={qq.id}
                    className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      Q{idx + 1}: {qq.question}
                    </h3>
                    <ul className="space-y-1 mb-3">
                      {qq.options.map((opt, i) => {
                        const chosen =
                          qq.type === "multiple"
                            ? (sel || []).includes(String(i))
                            : sel == i;
                        const isAns =
                          qq.type === "multiple"
                            ? qq.answer.includes(String(i))
                            : qq.answer == i;
                        return (
                          <li
                            key={i}
                            className={`px-4 py-2 rounded border ${
                              isAns
                                ? "border-green-400 bg-green-400/20 text-green-300"
                                : chosen
                                ? "border-red-400 bg-red-400/20 text-red-300"
                                : "border-gray-600 text-gray-300"
                            }`}
                          >
                            {opt}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="text-sm text-gray-400">
                      <strong>Explanation: </strong>
                      {qq.explanation}
                    </p>
                  </div>
                );
              })}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
