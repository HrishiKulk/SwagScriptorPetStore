import { test, expect } from '@playwright/test';

// E2E Scenario: E2E_StoreInventory
// Description: E2E_StoreInventory

test.describe('E2E_StoreInventory', () => {
  test('should execute complete scenario successfully', async ({ request }) => {
    const baseURL = 'https://petstore.swagger.io/v2';
    let scenarioContext = {};


    // Step 1: GET /store/inventory
    console.log('Executing step 1: GET /store/inventory');
    
    const step1Response = await request.get(`${baseURL}/store/inventory`, {
      data: {},
      headers: {
        'Content-Type': 'application/json',
        // Add your authentication headers here
      }
    });
    
    expect(step1Response.ok()).toBeTruthy();
    console.log('Step 1 completed with status:', step1Response.status());
    
    const step1Data = await step1Response.json();
    console.log('Step 1 response:', step1Data);
    
    // Store response data for next steps
    scenarioContext.step1 = step1Data;

    
    console.log('E2E Scenario completed successfully!');
  });
});