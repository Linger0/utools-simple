window.exports = {
    "选中查词": {
        mode: "none",
        args: {
            enter: (action) => {
                window.utools.hideMainWindow()
                utools.copyText(action.payload)
                utools.simulateKeyboardTap('k', 'alt')
                window.utools.outPlugin()
            }
        }
    },
    "输入查词": {
        mode: "list",
        args: {
            placeholder: "输入内容",
            search: (action, searchWord, callbackSetList) => {
                if (!searchWord) return callbackSetList()
                return callbackSetList([{
                    title: "沙拉查词",
                    description: searchWord,
                    icon: 'logo.png'
                }])
            },
            select: (action, itemData) => {
                window.utools.hideMainWindow()
                utools.copyText(itemData.description)
                utools.simulateKeyboardTap('k', 'alt')
                window.utools.outPlugin()
            }
        }
    }
}