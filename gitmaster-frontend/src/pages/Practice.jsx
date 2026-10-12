import { useState } from 'react'

function Practice() {
  const [command, setCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [workflowStage, setWorkflowStage] = useState('working')
  
  const [branches, setBranches] = useState(['main', 'develop'])
  const [activeBranch, setActiveBranch] = useState('main')
  const [branchCommits, setBranchCommits] = useState({
    main: ['a1b2c3d'],
    develop: []
  })


  const suggestions = [
  'git status', 
  'git init',
  'git log',
  'git branch',
  'git add',
  'git commit'
]
const filteredSuggestions = suggestions.filter((item) =>
  item.startsWith(command.trim())
)
  const [output, setOutput] = useState([
  {
    type: 'welcome',
    text: 'Welcome to GitMaster Practice Terminal!'
  },
  {
    type: 'welcome',
    text: 'Type "help" to see available commands.'
  }
])

  const runCommand = () => {
    const enteredCommand = command.trim()

if (!enteredCommand) {
  return
}

setCommandHistory((previous) => [
  ...previous,
  enteredCommand
])

setHistoryIndex(-1)

    let result = ''

    if (enteredCommand === 'help') {
      result =
        'Available commands: git status, git init, git log, clear'
    } else if (enteredCommand === 'git status') {
      result =
        'On branch main\nnothing to commit, working tree clean'
    } else if (enteredCommand === 'git init') {
      result =
        'Initialized empty Git repository.'
    } else if (enteredCommand === 'git log') {
  result =
    'commit a1b2c3d\nAuthor: GitMaster User\nInitial commit'
} else if (enteredCommand === 'git log --oneline') {
  result =
    'a1b2c3d Initial commit'

} else if (enteredCommand === 'git branch') {
  result = branches
    .map((branch) => `${branch === activeBranch ? '* ' : '  '}${branch}`)
    .join('\n')
} else if (enteredCommand.startsWith('git branch ')) {
  const newBranch = enteredCommand.slice('git branch '.length).trim()

  if (!newBranch || branches.includes(newBranch)) {
    result = `Branch '${newBranch}' already exists or is invalid.`
  } else {
    setBranches((previous) => [...previous, newBranch])
    setBranchCommits((previous) => ({
      ...previous,
      [newBranch]: [...(previous[activeBranch] || [])]
    }))
    result = `Created branch '${newBranch}'.`
  }
} else if (
  enteredCommand.startsWith('git switch ') ||
  enteredCommand.startsWith('git checkout ')
) {
  const targetBranch = enteredCommand.startsWith('git switch ')
    ? enteredCommand.slice('git switch '.length).trim()
    : enteredCommand.slice('git checkout '.length).trim()

  if (branches.includes(targetBranch)) {
    setActiveBranch(targetBranch)
    result = `Switched to branch '${targetBranch}'.`
  } else {
    result = `Branch '${targetBranch}' not found.`
  }
} else if (enteredCommand === 'git add') {

  result =
    'Changes added to staging area.'
} else if (enteredCommand === 'git add .') {
  result =
    'All changes added to staging area.'

} else if (enteredCommand === 'git commit') {
  const commitId = Math.random().toString(16).slice(2, 9)

  setBranchCommits((previous) => ({
    ...previous,
    [activeBranch]: [
      ...(previous[activeBranch] || []),
      commitId
    ]
  }))

  setWorkflowStage('repository')
  result = `[${activeBranch} ${commitId}] Initial commit`
} else if (enteredCommand.startsWith('git commit -m ')) {
  const message = enteredCommand
    .slice(15)
    .replace(/^"|"$/g, '')

  const commitId = Math.random().toString(16).slice(2, 9)

  setBranchCommits((previous) => ({
    ...previous,
    [activeBranch]: [
      ...(previous[activeBranch] || []),
      commitId
    ]
  }))

  setWorkflowStage('repository')
  result = `[${activeBranch} ${commitId}] ${message}`

} else if (enteredCommand === 'clear') {
      setOutput([])
      setCommand('')
      return
    } else {
      result = `gitmaster: '${enteredCommand}' is not a recognized command`
    }

    setOutput((previous) => [
  ...previous,
  {
    type: 'command',
    text: `$ ${enteredCommand}`
  },
  {
    type: 'output',
    text: result
  }
])

    setCommand('')
  }

  return (
    <main className="content">
      <section className="learn-header">
        <p className="welcome-text">Git Practice 💻</p>

        <h1>Practice Git Commands</h1>

        <p className="hero-description">
          Practice Git commands in an interactive terminal environment.
        </p>
      </section>

      
      <div className="practice-workspace">
        <section className="practice-terminal">

        <div className="terminal-header">
  <div className="terminal-dots">
    <span className="dot red"></span>
    <span className="dot yellow"></span>
    <span className="dot green"></span>
  </div>

  <span>Git Terminal</span>
</div>

        <div className="terminal-body">
          {output.map((line, index) => (
  <div
    key={index}
    className={typeof line === 'string' ? 'terminal-output' : `terminal-${line.type}`}
  >
    {typeof line === 'string' ? line : line.text}
  </div>
))}

          <div className="terminal-input">
  <span>$</span>

  <input
    type="text"
    value={command}
    onChange={(event) => setCommand(event.target.value)}
    onKeyDown={(event) => {
  if (event.key === 'Enter') {
    runCommand()
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()

    if (commandHistory.length === 0) {
      return
    }

    const newIndex =
      historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(historyIndex - 1, 0)

    setHistoryIndex(newIndex)
    setCommand(commandHistory[newIndex])
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault()

    if (commandHistory.length === 0 || historyIndex === -1) {
      return
    }

    const newIndex = historyIndex + 1

    if (newIndex >= commandHistory.length) {
      setHistoryIndex(-1)
      setCommand('')
      return
    }

    setHistoryIndex(newIndex)
    setCommand(commandHistory[newIndex])
  }
}}
    placeholder="Type a Git command..."
  />
</div>

{command.trim() && filteredSuggestions.length > 0 && (
  <div className="command-suggestions">
    {filteredSuggestions.map((suggestion) => (
      <button
        key={suggestion}
        type="button"
        onClick={() => setCommand(suggestion)}
      >
        {suggestion}
      </button>
    ))}
  </div>
)}
        
        </div>
      </section>

      <section className="workflow-panel">
        <h2>Git Workflow</h2>
        <p>See how Git commands move your changes.</p>

        <div className={`workflow-stage ${workflowStage === 'working' ? 'active' : ''}`}>
          <strong>1. Working Directory</strong>
          <p>Your files and changes</p>
        </div>

        <div className="workflow-arrow">↓</div>

        <div className={`workflow-stage ${workflowStage === 'staging' ? 'active' : ''}`}>
          <strong>2. Staging Area</strong>
          <p>Changes ready for a commit</p>
        </div>

        <div className="workflow-arrow">↓</div>

        <div className={`workflow-stage ${workflowStage === 'repository' ? 'active' : ''}`}>
          <strong>3. Repository</strong>
          <p>Saved commits</p>
        </div>
      </section>
      
        <div className="branch-visualization">
          <h3>Branch Visualization</h3>
          <p>Current branch: <strong>{activeBranch}</strong></p>

          <div className="branch-list">
            {branches.map((branch) => (
              <div
                key={branch}
                className={`branch-item ${branch === activeBranch ? 'active' : ''}`}
              >
                <span className="branch-dot">●</span>
                <div>
                  <strong>{branch}</strong>
                  <p>
                    {(branchCommits[branch] || []).length} commit(s)
                  </p>
                </div>
                {branch === activeBranch && (
                  <span className="branch-active-label">ACTIVE</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>

  )
}

export default Practice