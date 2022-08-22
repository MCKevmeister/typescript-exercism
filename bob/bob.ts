export const hey = (message: string): string => {
    let trimmedMessage: string = message.trim().replace(/[^a-zA-Z0-9? ]/g, '');
    if (trimmedMessage === '') return 'Fine. Be that way!';
    if (trimmedMessage.endsWith('?'))
        return trimmedMessage.toUpperCase() === trimmedMessage && trimmedMessage.match(/[a-zA-Z]/) !== null
            ? `Calm down, I know what I'm doing!`
            : 'Sure.';
    if (trimmedMessage.toUpperCase() === trimmedMessage && trimmedMessage.match(/[a-zA-Z]/) !== null)
        return 'Whoa, chill out!';
    return 'Whatever.';
}

console.log("asdf")


