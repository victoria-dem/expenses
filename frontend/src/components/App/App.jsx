import styles from './App.module.css';
import Expenses from '../Expenses/Expenses';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <p>Expense tracker</p>
      </header>
      <Expenses />
    </div>
  );
}

export default App;
