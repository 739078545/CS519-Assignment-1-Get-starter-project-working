import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "Today's date is " + dateString; // Add this line to return today's date
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
    // log the kv value to Azure Function App
    const Secret2 = process.env.Secret2;
    context.log(`Secret2 = This is secret #2`);

    // store a string in Queue Storage
    context.bindings.myQueueItem = `Secret2 = This is secret #2`

};

export default httpTrigger;