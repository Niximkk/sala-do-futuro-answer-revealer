/* Go ahead and skid the code poopy joe */
/* MIT Licence huh? */

(function() {
    const originalFetch = fetch;
    let currentBox = null;

    fetch = function(resource, init) {
        return originalFetch(resource, init)
            .then(response => {
                return response.clone().json().then(data => {
                    if (data.hasOwnProperty('correct') && data.correct !== true) {
                        let answer = data.comment;

                        if (currentBox) {
                            document.body.removeChild(currentBox);
                        }

                        const highlightKeywords = (text) => {
                            text = text.replace(/\((A|B|C|D|E|F|G)\)/g, '<span style="color: #72ff72;">$&</span>');

                            const keywordRegex = /\b(correto|corretos|correta|corretas|incorreto|incorretos|incorreta|incorretas|errado|errados|errada|erradas|certo|certos|certa|certas)\b/gi;
                            text = text.replace(keywordRegex, '<span style="color: #72ff72;">$&</span>');

                            text = text.replace(/<u>(.*?)<\/u>/g, '<u style="color: #72ff72;">$1</u>');

                            return text;
                        };

                        answer = highlightKeywords(answer);

                        const box = document.createElement('div');
                        box.innerHTML = `
                            <div style="text-align: right;">
                                <button id="closeBox" style="background: none; border: none; color: #fff; font-size: 14px; cursor: pointer;">&times;</button>
                            </div>
                            <div id="boxContent" style="max-height: calc(100vh - 100px); overflow-y: auto;">${answer}</div>`;
                        
                        box.style.position = 'fixed';
                        box.style.bottom = '20px';
                        box.style.right = '20px';
                        box.style.maxWidth = '300px';
                        box.style.backgroundColor = '#333';
                        box.style.color = '#fff';
                        box.style.padding = '15px';
                        box.style.borderRadius = '8px';
                        box.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                        box.style.zIndex = '9999';
                        box.style.opacity = '1';
                        box.style.transition = 'opacity 1s ease';
                        box.style.fontSize = '12px';
                        
                        box.style.maxHeight = 'calc(100vh - 40px)';
                        box.style.overflowY = 'auto';

                        document.body.appendChild(box);
                        currentBox = box;

                        const closeButton = document.getElementById('closeBox');
                        closeButton.addEventListener('click', () => {
                            box.style.opacity = '0';
                            setTimeout(() => {
                                if (currentBox === box) {
                                    document.body.removeChild(box);
                                    currentBox = null;
                                }
                            }, 1000);
                        });

                        const modifiedResponse = new Response(JSON.stringify(data), {
                            status: response.status,
                            statusText: response.statusText,
                            headers: response.headers
                        });

                        return modifiedResponse;
                    }
                    return response;
                });
            })
            .catch(error => {
                console.log(`Well, that happened:`, error);
            });
    };
})();
