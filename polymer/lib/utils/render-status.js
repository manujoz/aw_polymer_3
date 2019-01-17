import"./boot.js";let scheduled=!1,beforeRenderQueue=[],afterRenderQueue=[];function schedule(){scheduled=!0;requestAnimationFrame(function(){scheduled=!1;flushQueue(beforeRenderQueue);setTimeout(function(){runQueue(afterRenderQueue)})})}function flushQueue(queue){while(queue.length){callMethod(queue.shift())}}function runQueue(queue){for(let i=0,l=queue.length;i<l;i++){callMethod(queue.shift())}}function callMethod(info){const context=info[0],callback=info[1],args=info[2];try{callback.apply(context,args)}catch(e){setTimeout(()=>{throw e})}}export function flush(){while(beforeRenderQueue.length||afterRenderQueue.length){flushQueue(beforeRenderQueue);flushQueue(afterRenderQueue)}scheduled=!1}export function beforeNextRender(context,callback,args){if(!scheduled){schedule()}beforeRenderQueue.push([context,callback,args])}export function afterNextRender(context,callback,args){if(!scheduled){schedule()}afterRenderQueue.push([context,callback,args])}