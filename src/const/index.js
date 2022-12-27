export const STATUS = {
    NEW: 'New',
    DOING:'Doing',
    DONE:'Done'
};
export const MODE = {
    SHOW_LIST : 'showList',
    ADD_NEW : 'addNew',
    DETALL_TASK:'detailTask'
}
export const ROUTE = {
    ALL:'/',
    NEW:"/new",
    DOING:"/doing",
    DONE:"/done",
    ADDNEW:"/add-new",
    DETAIL:"/detail",
    DETAIL_TASK:"/detil/:idTask" ,
    NOT_FOUND:"*"
}


export const SIDEBAR_ITEMS = [
    {
        url:"/",
        title: "All Task"
    },
    {
        url:"/new",
        title: "New Task"
    },
    {
        url:"/doing",
        title: "Doing Task"
    },
    {
        url:"/done",
        title: "Done Task"
    }
]

export const LIST_TO_DO_KEY = "l_t_d_k";
