module.exports = async function (context, myQueueItem) {
    context.log('Node.js queue trigger function processed work item', myQueueItem);
};