/*
function компонента для Айтема (лі з текстом + кнопкою)
За натисненням на кнопку лі зникає з екрану
Декомпозиція задачі:
1. Зробити функціональну компоненту TodoItem
2. Винести в цю компоненту TodoItem <li>
3. Переписати return, щоб вивести на екран все те, що ми отримуємо через props
4. Зробити callback в батьківського компонента (TodoList), який має отримати id на вхід та видалити
зі стейту елемент з таким id
5. В компоненті TodoItem зробити виклик callback і передати цьому callback'у айдішник (за кліком на кнопку)
*/

function ToDoItem(props) {
    const clickHandler = () => {
        const {delCallback, id} = props;
        delCallback(id);
    }

    return (
        <li>
            {props.text}
            <button onClick={() => clickHandler()}>X</button>
        </li>
    )
}

export default ToDoItem