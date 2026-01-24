export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Infrastructure',
      color: 'blue',
      skills: [
        { name: 'Linux (CentOS/Ubuntu)', level: 90 },
        { name: 'Windows Server', level: 85 },
        { name: 'HP Server (iLO/IPMI)', level: 90 },
        { name: 'PXE Boot / Clonezilla', level: 85 },
        { name: 'Server Hardware', level: 85 },
      ],
    },
    {
      title: 'Networking & Security',
      color: 'green',
      skills: [
        { name: 'Network Configuration', level: 85 },
        { name: 'Firewall Management', level: 80 },
        { name: 'Security Incident Response', level: 85 },
        { name: 'Traffic Analysis', level: 75 },
        { name: 'DNS/NAT Configuration', level: 80 },
      ],
    },
    {
      title: 'Web Stack (APM)',
      color: 'orange',
      skills: [
        { name: 'Apache HTTP Server', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'PHP', level: 70 },
        { name: 'Shell Scripting', level: 85 },
      ],
    },
    {
      title: 'Tools & Collaboration',
      color: 'purple',
      skills: [
        { name: 'JIRA', level: 90 },
        { name: 'Confluence/Wiki', level: 85 },
        { name: 'Slack', level: 90 },
        { name: 'Git/GitHub', level: 80 },
        { name: 'Claude Code (AI)', level: 85 },
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
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        progress: 'bg-orange-500',
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
          카페24 IDC 기술지원팀 실무 경험 기반 기술 스택
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className={`${colorClasses.bg} border-2 ${colorClasses.border} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-800 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${colorClasses.progress} h-2 rounded-full transition-all duration-500`}
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
