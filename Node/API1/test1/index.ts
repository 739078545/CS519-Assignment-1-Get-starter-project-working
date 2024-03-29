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
    const secretValue = process.env.Secret2 || "This is Secret #2";

    // Log the desired message with the value
    const logMessage = `Secret2 = ${secretValue}`;
    context.log(logMessage);

};

export default httpTrigger;