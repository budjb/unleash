/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { IncomingWebhookSchema } from './incomingWebhookSchema';

/**
 * A response model with a list of incoming webhooks.
 */
export interface IncomingWebhooksSchema {
    /** A list of incoming webhooks. */
    incoming_webhooks: IncomingWebhookSchema[];
}
