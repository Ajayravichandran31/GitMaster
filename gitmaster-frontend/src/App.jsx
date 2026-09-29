import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Learn from './pages/Learn.jsx'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('gitmaster-theme') === 'dark'
  })

  useEffect(() => {
    localStorage.setItem(
      'gitmaster-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <header className="topbar">
        <div className="logo">
          <span className="logo-icon">⌘</span>
          <span>GitMaster</span>
        </div>

        <div className="topbar-right">
          <div className="search-box">
            🔍
            <input
              type="text"
              placeholder="Search commands..."
            />
          </div>

          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button className="profile-button">
            AR
          </button>
        </div>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <nav>
           <NavLink
  to="/"
  className={({ isActive }) =>
    `nav-item ${isActive ? 'active' : ''}`
  }
>
  🏠 <span>Home</span>
</NavLink>

<NavLink
  to="/learn"
  className={({ isActive }) =>
    `nav-item ${isActive ? 'active' : ''}`
  }
>
  📖 <span>Learn</span>
</NavLink>

            <a className="nav-item" href="#">   
              💻 <span>Practice</span>
            </a>

            <a className="nav-item" href="#">
              ❓ <span>Quizzes</span>
            </a>

            <a className="nav-item" href="#">
              🎯 <span>Challenges</span>
            </a>

            <a className="nav-item" href="#">
              🌳 <span>Visualizer</span>
            </a>

            <a className="nav-item" href="#">
              📄 <span>Cheat Sheet</span>
            </a>

            <a className="nav-item" href="#">
              ⭐ <span>Saved Commands</span>
            </a>

            <a className="nav-item" href="#">
              📊 <span>Progress</span>
            </a>
          </nav>

          <div className="sidebar-bottom">
            <a className="nav-item" href="#">
              ⚙️ <span>Settings</span>
            </a>
          </div>
        </aside>

        <Routes>
          <Route
            path="/"
            element={
              <main className="content">
                <section className="welcome-section">
                  <div>
                    <p className="welcome-text">
                      Welcome back, Ajay! 👋
                    </p>

                    <h1>
                      Learn Git by Doing,
                      <br />
                      <span>Not Just Reading.</span>
                    </h1>

                    <p className="hero-description">
                      Learn Git commands, practice real workflows,
                      and build your confidence step by step.
                    </p>

                    <div className="hero-buttons">
                      <button className="primary-button">
                        Start Learning →
                      </button>

                      <button className="secondary-button">
                        Practice Git
                      </button>
                    </div>
                  </div>

                  <div className="hero-illustration">
                    <div className="terminal-card">
                      <div className="terminal-top">
                        <span>●</span>
                        <span>●</span>
                        <span>●</span>
                      </div>

                      <div className="terminal-content">
                        <p>$ git status</p>

                        <p className="success">
                          ✓ On branch main
                        </p>

                        <p>$ git add .</p>

                        <p>
                          $ git commit -m "first commit"
                        </p>

                        <p className="success">
                          ✓ Changes committed
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="progress-section">
                  <div className="section-heading">
                    <div>
                      <h2>Your Git Progress</h2>
                      <p>
                        Keep learning and improving every day.
                      </p>
                    </div>

                    <button className="view-button">
                      View Progress →
                    </button>
                  </div>

                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-icon blue">
                        📚
                      </div>

                      <div>
                        <h3>42 / 75</h3>
                        <p>Commands Learned</p>
                      </div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-icon purple">
                        ❓
                      </div>

                      <div>
                        <h3>18</h3>
                        <p>Quizzes Completed</p>
                      </div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-icon green">
                        🎯
                      </div>

                      <div>
                        <h3>12</h3>
                        <p>Challenges Completed</p>
                      </div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-icon orange">
                        🔥
                      </div>

                      <div>
                        <h3>7 Days</h3>
                        <p>Current Streak</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="quick-section">
                  <div className="section-heading">
                    <div>
                      <h2>Quick Access</h2>
                      <p>
                        Jump straight into what you want to practice.
                      </p>
                    </div>
                  </div>

                  <div className="quick-grid">
                    <div className="quick-card">
                      <div className="quick-icon blue-bg">
                        📖
                      </div>

                      <h3>Learn Git</h3>

                      <p>
                        Explore Git commands and concepts.
                      </p>

                      <button>
                        Start Learning →
                      </button>
                    </div>

                    <div className="quick-card">
                      <div className="quick-icon green-bg">
                        💻
                      </div>

                      <h3>Practice Terminal</h3>

                      <p>
                        Practice Git commands interactively.
                      </p>

                      <button>
                        Open Terminal →
                      </button>
                    </div>

                    <div className="quick-card">
                      <div className="quick-icon purple-bg">
                        ❓
                      </div>

                      <h3>Take a Quiz</h3>

                      <p>
                        Test your Git knowledge.
                      </p>

                      <button>
                        Start Quiz →
                      </button>
                    </div>

                    <div className="quick-card">
                      <div className="quick-icon orange-bg">
                        🌳
                      </div>

                      <h3>Git Visualizer</h3>

                      <p>
                        Understand branches visually.
                      </p>

                      <button>
                        Open Visualizer →
                      </button>
                    </div>
                  </div>
                </section>

                <section className="topics-section">
                  <div className="section-heading">
                    <div>
                      <h2>Popular Topics</h2>

                      <p>
                        Start with the most commonly used Git concepts.
                      </p>
                    </div>
                  </div>

                  <div className="topics">
                    <button>Git Basics</button>
                    <button>Branches</button>
                    <button>Commits</button>
                    <button>Remote</button>
                    <button>Merge</button>
                    <button>Rebase</button>
                    <button>Stash</button>
                  </div>
                </section>
              </main>
            }
          />

          <Route
            path="/learn"
            element={<Learn />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App