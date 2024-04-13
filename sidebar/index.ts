export default {
    '/Backend/MySQL/': [
        { text: '介绍', link: '/Backend/MySQL/' },
        { text: '快速开始', link: '/Backend/MySQL/install' },
        { text: 'SELECT语句', link: '/Backend/MySQL/select' },
        { text: '运算符&查询条件', link: '/Backend/MySQL/operator' },
        { text: '多表查询', link: '/Backend/MySQL/multiTable' },
    ],
    '/CodeLife/': [
        { text: '概述', link: '/CodeLife/' },
        {
            text: '美团',
            collapsed: true,
            items: [
                { text: '2024', link: '/CodeLife/meituan/2024' }
            ]
        }
    ],
    '/WeeklyReport/': [
        { text: '概述', link: '/WeeklyReport/' },
        { text: '2024', link: '/WeeklyReport/2024' }
    ]
};
