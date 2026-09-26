function Learn() {
  return (
    <div>
      <h1>Learn Git</h1>
      <p>Learn Git commands and concepts step by step.</p>

      <div>
        <button>Beginner</button>
        <button>Intermediate</button>
        <button>Advanced</button>
      </div>

      <div>
        <h2>Git Basics</h2>

        <div>
          <h3>git init</h3>
          <p>Create a new Git repository.</p>
          <span>Beginner</span>
          <button>Learn →</button>
        </div>

        <div>
          <h3>git status</h3>
          <p>Check the current state of your Git repository.</p>
          <span>Beginner</span>
          <button>Learn →</button>
        </div>

        <div>
          <h3>git add</h3>
          <p>Stage changes before committing them.</p>
          <span>Beginner</span>
          <button>Learn →</button>
        </div>

        <div>
          <h3>git commit</h3>
          <p>Save your staged changes to the repository history.</p>
          <span>Beginner</span>
          <button>Learn →</button>
        </div>

        <div>
          <h3>git log</h3>
          <p>View the commit history of your repository.</p>
          <span>Beginner</span>
          <button>Learn →</button>
        </div>

        <div>
          <h3>git branch</h3>
          <p>Create, list, and manage Git branches.</p>
          <span>Intermediate</span>
          <button>Learn →</button>
        </div>
      </div>
    </div>
  )
}

export default Learn