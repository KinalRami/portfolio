export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>

        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          I’m <span className="text-white font-medium">Kinal Rami</span>, a passionate frontend developer with strong expertise in{' '}
          <span className="text-white">Vue.js, Nuxt.js, and Tailwind CSS</span>, along with experience working in{' '}
          <span className="text-white">React.js and Shopify design</span>. I specialize in building elegant, scalable UIs and turning ideas into
          functional, high-performing products.
        </p>

        <p className="mt-6 text-zinc-500 dark:text-zinc-400 leading-relaxed">
          I’ve contributed to various real-world projects — from corporate websites to full-scale e-commerce platforms. I'm currently open to{' '}
          <span className="text-white font-medium">freelance and remote opportunities</span> where I can contribute, collaborate, and grow.
        </p>
      </div>
    </section>
  );
}
