export const OPEN_POPOVER = '[POPOVER] OPEN';
export const CLOSE_POPOVER = '[POPOVER] CLOSE';


export function closePopover()
{
    return {
        type: CLOSE_POPOVER
    }
}

export function openPopover(currentTarget, options)
{
    return {
        type: OPEN_POPOVER,
        currentTarget,
        options,
    }
}

