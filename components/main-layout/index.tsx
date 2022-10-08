import React from 'react'

import { Layout } from 'antd'

function MainLayout({ children }: { children: React.ReactNode }) {
	const { Header, Footer, Sider, Content } = Layout

	return (
		<Layout className=' h-screen'>
			<Sider>Sider</Sider>
			<Layout>
				<Header>Header</Header>
				<Content>{children}</Content>
				<Footer>Footer</Footer>
			</Layout>
		</Layout>
	)
}

export default MainLayout
