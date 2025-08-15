import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="text-center py-12 px-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-xl mx-4 my-6 dark:from-pink-500 dark:to-purple-700">
      <h2 className="text-2xl font-semibold mb-2">Ready to Take the First Step?</h2>
      <p className="mb-4">Start your PCOD wellness journey today with a personalized assessment.</p>
      <Link to="/assessment">
        <button className="bg-white text-pink-600 font-bold py-2 px-6 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-300 transition">
          Take Assessment
        </button>
      </Link>
    </section>
  );
}
