import { useState } from 'react'

function Practice() {
  const [command, setCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

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
  result =
    '* main\n  develop'
} else if (enteredCommand === 'git add') {
  result =
    'Changes added to staging area.'
} else if (enteredCommand === 'git add .') {
  result =
    'All changes added to staging area.'
} else if (enteredCommand === 'git commit') {
  result =
    '[main a1b2c3d] Initial commit'
} else if (enteredCommand.startsWith('git commit -m ')) {
  const message = enteredCommand.slice(15).replace(/^"|"$/g, '')

  result =
    `[main a1b2c3d] ${message}`
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
    </main>
  )
}

export default Practice