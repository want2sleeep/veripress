import TaskStatus from '@/data/taskInfo.js'

export const Header = [
    {
        title: '文章标题',
        key: 'title',
        align: 'start'
    },
    {
        title: '分区',
        key: 'partitionName'
    },
    {
        title: '上传时间',
        key: 'createTime',
        value: item => item.createTime.split('T')[0]
    },
    {
        title: '字数',
        key: 'wordCount',
        align: 'end'
    },
    {
        title: '检测状态',
        key: 'status',
        align: 'end',
        value: item => TaskStatus[item.status],
    },
    {
        title: '操作',
        key: 'actions',
        align: 'center',
        sortable: false
    },
]

export default Header
