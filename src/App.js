import Header from './components/Header'
import Date from './components/Date'
import Days from './components/Days'

const App = () => {
	return (
		<>
			<Header />
			<br/>
			<Date type='start' />
			<br/>
			<Days total_days='66' />
			<Date type='end' />
		</>
	);
}

export default App;
