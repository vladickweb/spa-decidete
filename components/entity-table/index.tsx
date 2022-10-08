import { Space, Table, Tag } from 'antd'
import React from 'react'

interface EntityTableProps {
	dataSource: typeof Table['prototype']['props']['dataSource']
	columns: typeof Table['prototype']['props']['columns']
}

const EntityTable = ({ dataSource, columns }: EntityTableProps) => (
	<Table dataSource={dataSource} columns={columns}></Table>
)

export default EntityTable
