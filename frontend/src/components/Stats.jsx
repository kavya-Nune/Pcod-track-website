export default function Stats() {
  return (
    <div className="flex justify-center items-center gap-8 py-12 text-center text-gray-800 dark:text-gray-200">
      <div>
        <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">10M+</h2>
        <p className="text-sm">Women affected</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-400">95%</h2>
        <p className="text-sm">Can be managed</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-blue-500 dark:text-blue-300">5-10%</h2>
        <p className="text-sm">Of women worldwide</p>
      </div>
    </div>
  );
}
