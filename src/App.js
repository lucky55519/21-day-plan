import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

const tasks = [
  { day: 1, title: "启航日", content: "制定21天目标，写下你的承诺" },
  { day: 2, title: "建立习惯", content: "设定每天固定的执行时间" },
  { day: 3, title: "小步快跑", content: "完成一个最小可行任务" },
  { day: 4, title: "记录心得", content: "写下今天的3个收获" },
  { day: 5, title: "复盘调整", content: "回顾前4天，优化方法" },
  { day: 6, title: "挑战自我", content: "把难度提升10%" },
  { day: 7, title: "第一周总结", content: "庆祝完成第一周！" },
  { day: 8, title: "深化练习", content: "专注核心技能训练" },
  { day: 9, title: "分享交流", content: "和朋友分享你的进展" },
  { day: 10, title: "突破瓶颈", content: "找出卡点，寻求解决" },
  { day: 11, title: "持续精进", content: "增加学习时长20%" },
  { day: 12, title: "系统学习", content: "补齐知识短板" },
  { day: 13, title: "输出倒逼", content: "产出一个作品/总结" },
  { day: 14, title: "第二周总结", content: "2/3 完成，继续加油！" },
  { day: 15, title: "冲刺开始", content: "进入最后一周冲刺" },
  { day: 16, title: "高强度训练", content: "今天比昨天更进一步" },
  { day: 17, title: "查漏补缺", content: "回顾所有笔记" },
  { day: 18, title: "实战演练", content: "模拟真实场景练习" },
  { day: 19, title: "精益求精", content: "打磨细节" },
  { day: 20, title: "最后准备", content: "为明天的成果做准备" },
  { day: 21, title: "圆满达成", content: "🎉 你做到了！总结21天收获" },
];

export default function App() {
  const [completed, setCompleted] = useState({});
  const [currentDay, setCurrentDay] = useState(1);

  const toggleComplete = (day) => {
    setCompleted({ ...completed, [day]: !completed[day] });
  };

  const completedCount = Object.values(completed).filter(Boolean).length;
  const progress = (completedCount / 21) * 100;
  const currentTask = tasks[currentDay - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          🎯 21天计划
        </h1>
        <p className="text-center text-gray-600 mb-6">
          已完成 {completedCount} / 21 天
        </p>

        <div className="bg-white rounded-full h-4 mb-6 overflow-hidden shadow">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {tasks.map((task) => (
            <button
              key={task.day}
              onClick={() => setCurrentDay(task.day)}
              className={`aspect-square rounded-lg font-bold text-sm transition-all ${
                completed[task.day]
                  ? 'bg-green-500 text-white'
                  : currentDay === task.day
                  ? 'bg-blue-500 text-white ring-2 ring-blue-300'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {completed[task.day] ? <Check className="mx-auto" size={20} /> : task.day}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentDay(Math.max(1, currentDay - 1))}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <ChevronLeft />
            </button>
            <div className="text-center">
              <div className="text-sm text-gray-500">Day {currentTask.day}</div>
              <div className="text-xl font-bold text-gray-800">{currentTask.title}</div>
            </div>
            <button
              onClick={() => setCurrentDay(Math.min(21, currentDay + 1))}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <ChevronRight />
            </button>
          </div>

          <p className="text-gray-700 text-center mb-6 py-4 bg-gray-50 rounded-lg">
            {currentTask.content}
          </p>

          <button
            onClick={() => toggleComplete(currentTask.day)}
            className={`w-full py-3 rounded-lg font-bold transition-all ${
              completed[currentTask.day]
                ? 'bg-gray-200 text-gray-600'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90'
            }`}
          >
            {completed[currentTask.day] ? '✓ 已完成（点击取消）' : '标记完成'}
          </button>
        </div>

        {completedCount === 21 && (
          <div className="mt-6 bg-yellow-100 border-2 border-yellow-400 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🎉🎊🎉</div>
            <div className="font-bold text-gray-800">恭喜完成21天挑战！</div>
          </div>
        )}
      </div>
    </div>
  );
}
