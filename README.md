<p align="center">
  <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
    <img src="https://github.com/user-attachments/assets/e0c7b5b4-47a8-4c9e-8c07-15379f62d867" width="128px" height="128px" alt="HelloKittyByeBye">
  </a>
</p>

<div align="center">

## ✨ O Primeiro Cheat para a plataforma Sala do Futuro!

### ❔ Como funciona:
1 - Captura a request de verificação de questão.

2 - Lê o comentario (o que mostra quando se acerta).

3 - Mostra na tela com alguns highlights em uma caixinha.
<br><br><br>
### 🔓 Como usar:
1 - Pressione CTRL + SHIFT + B.

2 - Selecione todo o conteudo do bloco abaixo.

3 - Arraste para a barra de favoritos.

4 - Abra a [Sala do Futuro](https://saladofuturo.educacao.sp.gov.br/) e clique no bookmark.

```js
javascript:!function(){alert("\uD83D\uDD13 Injetado!\n\n✨ Bora ferrar a Sala do CaralhoKKK\n\uD83C\uDF3F Get good get Khanware!\n❔ Feito por @im.nix");let e=fetch,t=null;fetch=function(o,r){return e(o,r).then(e=>e.clone().json().then(o=>{if(o.hasOwnProperty("correct")&&!0!==o.correct){var r;let a=o.comment;t&&document.body.removeChild(t),a=r=(r=(r=(r=a).replace(/\((A|B|C|D|E|F|G)\)/g,'<span style="color: #72ff72;">$&</span>')).replace(/\b(correto|corretos|correta|corretas|incorreto|incorretos|incorreta|incorretas|errado|errados|errada|erradas|certo|certos|certa|certas)\b/gi,'<span style="color: #72ff72;">$&</span>')).replace(/<u>(.*?)<\/u>/g,'<u style="color: #72ff72;">$1</u>');let l=document.createElement("div");l.innerHTML=%60                            <div style="text-align: right;">                                <button id="closeBox" style="background: none; border: none; color: #fff; font-size: 14px; cursor: pointer;">&times;</button>                            </div>                            <div id="boxContent" style="max-height: calc(100vh - 100px); overflow-y: auto;">${a}</div>%60,l.style.position="fixed",l.style.bottom="20px",l.style.right="20px",l.style.maxWidth="300px",l.style.backgroundColor="#333",l.style.color="#fff",l.style.padding="15px",l.style.borderRadius="8px",l.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)",l.style.zIndex="9999",l.style.opacity="1",l.style.transition="opacity 1s ease",l.style.fontSize="12px",l.style.maxHeight="calc(100vh - 40px)",l.style.overflowY="auto",document.body.appendChild(l),t=l;let n=document.getElementById("closeBox");n.addEventListener("click",()=>{l.style.opacity="0",setTimeout(()=>{t===l&&(document.body.removeChild(l),t=null)},1e3)});let s=new Response(JSON.stringify(o),{status:e.status,statusText:e.statusText,headers:e.headers});return s}return e})).catch(e=>{console.log("Well, that happened:",e)})}}();
```
