import React from "react";
import './App.css';
class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://script.googleusercontent.com/macros/echo?user_content_key=3Ssq6Z2sg13TiIgdckhHGbz3rFVUE4J1Bu9V5o6-4DVUkGBScI09jfKjgwmO3SBBzcf6feJKXjKV_9l0L7fTrr1ttCH1Ai-6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCtVYtv8ZhRLfA7VBBs0bXbAzfQDvnJO_nzCVpNV7D0QHRHiDRE0xYGiILg75TftHBlOA-fMzvhhZW0yh2-78FMMfeuOC6pTSNz9Jw9Md8uu&lib=M-FgR4ef80g-AOu9EqbgMJ6Ml19KhzDd9")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { items } = this.state;
		var result = items.map((item)=>{
			return(
				<tr>
				<td>{ item.FullName }</td>
				<td>{ item.MobileNumber }</td>
			</tr>
			)
		})
		return (

			<table>
                <tr>
                    <th>FullName</th>
                    <th>MobileNumber</th>
                </tr>
				{result}

            </table>
	);
}
}

export default App;
