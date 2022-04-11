import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './containers/Layout'
import LandingPage from './containers/LandingPage'
import JobListingPage from './containers/JobListingPage'
import CompanyDashboard from './containers/CompanyDashboard'
import ProfilePage from './containers/ProfilePage'
import JobPostPage from './containers/JobPostPage'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="" element={<Layout showSearchBar />}>
						<Route index element={<LandingPage />} />
						<Route path="landing" element={<LandingPage />} />
					</Route>

					<Route path="" element={<Layout />}>
						<Route path="profile" element={<ProfilePage />} />
						<Route path="job-post" element={<JobPostPage />} />
					</Route>

					<Route path="" element={<Layout showJobFilter />}>
						<Route path="job-listing" element={<JobListingPage />} />
						<Route path="company-dashboard" element={<CompanyDashboard />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
