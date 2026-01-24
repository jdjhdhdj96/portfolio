# Code Review Skill

## Description
Performs comprehensive code review with focus on best practices, security, performance, and maintainability.

## Usage
```
/code-review [file-path or pattern]
```

### Examples
```
/code-review src/App.tsx
/code-review src/components/**/*.tsx
/code-review
```

If no path is provided, reviews all recently modified files.

## Instructions

When this skill is invoked:

1. **Identify Target Files**
   - If file path provided: Review specified file(s)
   - If pattern provided: Use Glob to find matching files
   - If no argument: Check `git status` and `git diff` for recently modified files
   - Prioritize .tsx, .ts, .jsx, .js files

2. **Read and Analyze Code**
   - Read each target file completely
   - Analyze code structure, patterns, and logic
   - Check against project conventions (CLAUDE.md)

3. **Review Categories**

   **🔒 Security Issues**
   - XSS vulnerabilities
   - SQL injection risks
   - Command injection
   - Insecure dependencies
   - Exposed secrets or credentials
   - OWASP Top 10 vulnerabilities

   **⚡ Performance Issues**
   - Unnecessary re-renders
   - Missing memoization
   - Inefficient loops or algorithms
   - Large bundle sizes
   - Memory leaks
   - Blocking operations

   **🏗️ Code Quality**
   - Code duplication
   - Complex functions (cognitive complexity)
   - Naming conventions
   - Proper TypeScript typing
   - Missing error handling
   - Console.log statements left in code

   **♿ Accessibility**
   - Missing alt text
   - Keyboard navigation
   - ARIA labels
   - Semantic HTML
   - Color contrast

   **📚 Best Practices**
   - React best practices
   - TypeScript best practices
   - Component composition
   - State management
   - Props drilling
   - Separation of concerns

   **🎨 Code Style**
   - Consistent formatting
   - Named exports vs default exports
   - Component structure
   - File organization

4. **Generate Review Report**

   Format the review as:

   ```markdown
   # Code Review Report

   ## 📊 Summary
   - Files reviewed: X
   - Issues found: Y
   - Critical: Z
   - Warnings: W

   ## 🔴 Critical Issues
   [List critical issues that must be fixed]

   ### src/example.tsx:42
   **Issue**: SQL Injection vulnerability
   **Severity**: Critical
   **Description**: User input is directly interpolated into SQL query
   **Recommendation**: Use parameterized queries or ORM

   ## 🟡 Warnings
   [List warnings and suggestions]

   ### src/component.tsx:15
   **Issue**: Missing key prop in list
   **Severity**: Warning
   **Description**: Missing key prop in map iteration
   **Recommendation**: Add unique key prop to each item

   ## ✅ Positive Findings
   [Highlight good practices observed]

   ## 💡 Suggestions
   [General suggestions for improvement]
   ```

5. **Prioritize Issues**
   - Critical: Security vulnerabilities, data loss risks, breaking bugs
   - High: Performance issues, accessibility problems
   - Medium: Code quality, best practices violations
   - Low: Style issues, minor optimizations

6. **Provide Actionable Recommendations**
   - Include file path and line number
   - Explain why it's an issue
   - Provide specific fix or code example
   - Reference documentation when helpful

## Review Checklist

- [ ] Security vulnerabilities checked
- [ ] Performance optimizations identified
- [ ] TypeScript types properly used
- [ ] Error handling present
- [ ] Accessibility considerations
- [ ] Code follows project conventions
- [ ] No console.log or debug code
- [ ] Props properly typed
- [ ] Component structure is clear
- [ ] No code duplication
- [ ] Proper naming conventions

## Notes
- Be constructive and educational
- Explain the "why" behind recommendations
- Recognize good code practices
- Provide code examples when possible
- Focus on meaningful issues, not nitpicks
