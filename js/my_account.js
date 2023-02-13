const listItemWrapper = document.querySelectorAll('.list_item_wrapper')
const listItemImage = document.querySelectorAll('.list_item_wrapper_img');
const listItemOpen = document.querySelectorAll('.list_item_wrapper_open');
const span = document.querySelectorAll('.list_item_wrapper_open_span');
const arrow = document.querySelector('.menu_arrow')
const container = document.querySelector('.menu_container');
const containerBody = document.querySelector('.container');
const greenBig = document.querySelector('list_item_wrapper_open');
const mainMenuList = document.querySelector('.main_menu_list');
const current = document.querySelector('.main_menu_list_item')
const headerLogo = document.querySelectorAll('.main_menu_list_item_logo');

arrow.addEventListener('click', ()=>{
    container.classList.toggle('active');
    containerBody.classList.toggle('active');
    arrow.classList.toggle('active');
    fn()
})

function fn() {
    for (let i = 0; i < containerBody.length; i++){
        containerBody[i].classList.toggle('active')
    }
    for (let i = 0; i < headerLogo.length; i++){
        headerLogo[i].classList.toggle('active')
    }
    for (let i = 0; i < listItemWrapper.length; i++){
        listItemWrapper[i].classList.toggle('active')
    }
    for (let j = 0; j < listItemImage.length; j++){
        listItemImage[j].classList.toggle('active');
    }
    for (let k = 0; k < listItemOpen.length; k++){
        listItemOpen[k].classList.toggle('active');
    }
    for (let t = 0; t < span.length; t++){
        span[t].classList.toggle('active');
    }
}

const burger = document.querySelector('.menu_icon')
const foto = document.querySelector('.title_data_foto_for_mobile_add_foto')
if (burger) {
    const menuBody = document.querySelector('.menu_body')
    const wrapper = document.querySelector('main')
    burger.addEventListener('click', function(e) {
        burger.classList.toggle('active');
        menuBody.classList.toggle('active');
        wrapper.classList.toggle('active');
        foto.classList.toggle('active');
    });
}


const blokOne = document.querySelector('.block_one')
const buttonOne = document.querySelector('.button_one')
const blockTwo = document.querySelector('.block_two')
const buttonTwo = document.querySelector('.button_two')
const blockThree = document.querySelector('.block_three')
const buttonThree = document.querySelector('.button_three')
const link = document.querySelector('.form_wrapper_title_for_third_block')
buttonOne.addEventListener('click', sendOne)
function hightLightButton(button) {
    if(button === buttonOne) {
        buttonOne.style.color = '#0176FF'
        buttonTwo.style.color = '#052140'
        buttonThree.style.color = '#052140'
    } else if (button === buttonTwo){
        buttonOne.style.color = '#052140'
        buttonTwo.style.color = ' #0176FF'
        buttonThree.style.color = '#052140'
    } else {
        buttonOne.style.color = '#052140'
        buttonTwo.style.color = '#052140'
        buttonThree.style.color = ' #0176FF'
    }
}
function sendOne(){
    next(2, 1, 3, buttonOne)
    link.style.display = "none"
}
buttonTwo.addEventListener('click', sendTwo)
function sendTwo(){
    next(1, 2, 3, buttonTwo)
    link.style.display = "none"
}
buttonThree.addEventListener('click', sendThreeBack)
function sendThreeBack(){
    next(1, 3, 2, buttonThree)
    link.style.display = "block"
}
function next(id_1, id_2, id_3, btn) {
    const div1 = document.getElementById(id_1)
    const div2 = document.getElementById(id_2)
    const div3 = document.getElementById(id_3)
    div1.style.display = 'none'
    div2.style.display = "flex"
    div3.style.display = 'none'
    hightLightButton(btn)
}
const deleteAccount = document.querySelector('.delete_account')
const popupDeleteAccount = document.querySelector('.popup_delete_your_account')
const buttonCanselDelete = document.querySelector('.delete_your_account_cancel')
const buttonDeleteAccount = document.querySelector('.delete_your_account_delete')

deleteAccount.addEventListener('click', openModalDelete)
function openModalDelete(){
    popupDeleteAccount.classList.add('open')
}

buttonCanselDelete.addEventListener('click', closeModalDelete)
function closeModalDelete() {
    popupDeleteAccount.classList.remove('open')
}
buttonDeleteAccount.addEventListener('click', deleteModal)
function deleteModal() {
    popupDeleteAccount.classList.remove('open')
}

const uploadFoto = document.querySelector('.upload_foto')
const uploadFotoMobile = document.querySelector('.title_data_foto_for_mobile_add_foto')
const popupUploadFoto = document.getElementById('dialog')
const buttonUploadFoto = document.querySelector('.upload_new_foto')

function showDialog(){
    popupUploadFoto.showModal()
}
function closeDialog(event){
    console.log(event.target)
    if(event.target === popupUploadFoto) {
        popupUploadFoto.close();
    }
}
function closeAddFoto() {
    popupUploadFoto.close()
}
uploadFotoMobile.addEventListener('click', showDialog)
uploadFoto.addEventListener('click', showDialog)
popupUploadFoto.addEventListener('click', closeDialog)
buttonUploadFoto.addEventListener('click', closeAddFoto)







