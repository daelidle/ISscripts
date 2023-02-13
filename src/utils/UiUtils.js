function displayPopup(title, message, confirmLambda, cancelLambda){
    return displayCompletePopup(title, message, null, 'Confirm', 'Cancel', confirmLambda, cancelLambda);
}

function displayCompletePopup(title, message, extendedMessage, confirmString, cancelString, confirmLambda, cancelLambda, customClass= ''){
    const timestamp = new Date().getTime();
    const popUpId = `DaelISPopup${timestamp}`;
    const popUpCancel = `DaelISCancel${timestamp}`;
    const popUpConfirm = `DaelISConfirm${timestamp}`;
    const extraMessage = extendedMessage === null ? '' : `<div class="offline-progress-box all-items" style="padding: 15px;">${extendedMessage}</div>`;
    const popUpHTML = `<div role="presentation" id="${popUpId}" class="MuiDialog-root feedback-dialog sell-item-dialog popup-dialog ${customClass}" style="position: fixed; z-index: 1300; inset: 0;">
                       <div class="MuiBackdrop-root" aria-hidden="true" style="opacity: 1; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"></div>
                       <div tabindex="0" data-test="sentinelStart"></div>
                       <div class="MuiDialog-container MuiDialog-scrollPaper" role="none presentation" tabindex="-1" style="opacity: 1;transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;">
                          <div class="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded" role="dialog">
                             <div class="MuiDialogTitle-root">
                                <h4 class="MuiTypography-root MuiTypography-h6">${title}</h4>
                             </div>
                             <p class="MuiTypography-root MuiDialogContentText-root MuiTypography-body1 MuiTypography-colorTextSecondary">${message}</p>
                             ${extraMessage}
                             <div class="MuiDialogActions-root MuiDialogActions-spacing" style="display: flex;">
                                <div class="button-container-250px">
                                   <div variant="contained" color="secondary" id="${popUpCancel}" class="close-dialog-button idlescape-button idlescape-button-gray" >${cancelString}</div>
                                </div>
                                <div class="button-container-250px">
                                   <div variant="contained" color="secondary" id="${popUpConfirm}" class="close-dialog-button idlescape-button idlescape-button-red">${confirmString}</div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div tabindex="0" data-test="sentinelEnd"></div>
                    </div>`;
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', popUpHTML);
    document.getElementById(popUpId).addEventListener("click",function(event){
        if (event.target.classList.contains('MuiDialog-container')){
            cancelLambda();
            document.getElementById(popUpId).remove();
        }
    },false);
    document.getElementById(popUpCancel).addEventListener("click",function(){
        cancelLambda();
        document.getElementById(popUpId).remove();
    },false);
    document.getElementById(popUpConfirm).addEventListener("click",function(){
        confirmLambda();
        document.getElementById(popUpId).remove();
    },false);

    return {'popUpId': popUpId, 'popUpCancel': popUpCancel, 'popUpConfirm': popUpConfirm};
}