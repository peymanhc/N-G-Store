export const LOCATION_CHANGE = '[LOCATION] LOCATION_CHANGE';



export function locationChange(location)
{
    return {
        type	: LOCATION_CHANGE,
		payload	: location,		
    }
}

