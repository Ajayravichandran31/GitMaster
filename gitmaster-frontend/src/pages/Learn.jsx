function Learn() {
  return (
    <main className="content">
      <section className="learn-header">
        <p className="welcome-text">Git Learning Path 📖</p>

        <h1>Learn Git</h1>

        <p className="hero-description">
          Learn Git commands and concepts step by step,
          from beginner to advanced.
        </p>
      </section>

      <section className="learn-levels">
        <button className="level-button active">
          Beginner
        </button>

        <button className="level-button">
          Intermediate
        </button>

        <button className="level-button">
          Advanced
        </button>
      </section>

      <section className="commands-section">
        <div className="section-heading">
          <div>
            <h2>Git Basics</h2>
            <p>
              Start with the commands you will use most often.
            </p>
          </div>
        </div>

        <div className="command-grid">
          <div className="command-card">
            <div className="command-top">
              <span className="command-icon">📁</span>
              <span className="difficulty beginner">
                Beginner
              </span>
            </div>

            <h3>git init</h3>

            <p>
              Create a new Git repository in your project.
            </p>

            <code>git init</code>

            <button>Learn →</button>
          </div>

          <div className="command-card">
            <div className="command-top">
              <span className="command-icon">🔍</span>
              <span className="difficulty beginner">
                Beginner
              </span>
            </div>

            <h3>git status</h3>

            <p>
              Check the current state of your Git repository.
            </p>

            <code>git status</code>

            <button>Learn →</button>
          </div>

          <div className="command-card">
            <div className="command-top">
              <span className="command-icon">➕</span>
              <span className="difficulty beginner">
                Beginner
              </span>
            </div>

            <h3>git add</h3>

            <p>
              Stage changes before committing them.
            </p>

            <code>git add .</code>

            <button>Learn →</button>
          </div>

          <div className="command-card">
            <div className="command-top">
              <span className="command-icon">💾</span>
              <span className="difficulty beginner">
                Beginner
              </span>
            </div>

            <h3>git commit</h3>

            <p>
              Save your staged changes to repository history.
            </p>

            <code>git commit -m "message"</code>

            <button>Learn →</button>
          </div>

          <div className="command-card">
            <div className="command-top">
              <span className="command-icon">📜</span>
              <span className="difficulty beginner">
                Beginner
              </span>
            </div>

            <h3>git log</h3>

            <p>
              View the commit history of your repository.
            </p>

            <code>git log</code>

            <button>Learn →</button>
          </div>

          <div className="command-card">
            <div className="command-top">
              <span className="command-icon">🌿</span>
              <span className="difficulty intermediate">
                Intermediate
              </span>
            </div>

            <h3>git branch</h3>

            <p>
              Create, list, and manage Git branches.
            </p>

            <code>git branch</code>

            <button>Learn →</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Learn