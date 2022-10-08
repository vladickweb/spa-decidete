import type { AppProps } from 'next/app'

import 'antd/dist/antd.css'
import '../styles/globals.css'
import MainLayout from '../components/main-layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	)
}

export default MyApp
