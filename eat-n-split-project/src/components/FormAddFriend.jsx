import Button from './Button.jsx'
const FormAddFriend = () => {
    return(
        <>
            <form className='form-add-friend' action="">
                <label htmlFor="">👯‍♂️ Friend Name</label>
                <input type="text" />
                <label htmlFor="">🏞️ image url</label>
                <input type="text" />
                <Button>Add</Button>
            </form>
        </>
    )
}
export default FormAddFriend