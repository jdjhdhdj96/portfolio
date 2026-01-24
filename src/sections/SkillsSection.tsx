export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'blue',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'Next.js', level: 75 },
      ],
    },
    {
      title: 'Backend',
      color: 'green',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 65 },
      ],
    },
    {
      title: 'Tools & Others',
      color: 'purple',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 70 },
        { name: 'Vite', level: 80 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; progress: string }> = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        progress: 'bg-blue-500',
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        progress: 'bg-green-500',
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        progress: 'bg-purple-500',
      },
    };
    return colors[color];
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Skills
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          다양한 기술 스택을 활용한 개발 경험
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className={`${colorClasses.bg} border-2 ${colorClasses.border} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-800">
                          {skill.name}
                        </span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`${colorClasses.progress} h-2.5 rounded-full transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
