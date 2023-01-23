# Pigeon

An accessible way to access public data from the bird app using your keyboard to interface with the company's interface.

## API Reference

### getTweet

Get a tweet by ID.

Returns

- `text`
- `username`
- `postedAt`

```js
{
  status: 'ok',
  requestedAt: '2023-01-23T03:47:58.449Z',
  data: {
    text: 'are there any communities out there for discussing the tech behind @CommunityNotes? \n' +
      '\n' +
      '#communitynotes',
    username: 'clairefroe',
    postedAt: '2023-01-22T23:51:12.000Z'
  }
}
```

### Get user

Get a user by username

Returns

- `username`
- `followers` (count)
- `following` (count)

```js
{
  status: 'ok',
  requestedAt: '2023-01-23T03:47:58.449Z',
  data: {
    username: 'clairefroe',
    bio: ' full stack dev\n' +
      ' cross-pollinator of Discord #random channels\n' +
      ' Student Programs @ Postman'
    following: 408,
    followers: 393
  }
}
```

## Errors

If any data is missing or something goes wrong, `status: 'error'` will be returned. This means it's time to update to `htmlHandler.js`...

Here's an example error message for `getTweet` when no `username` data was found

```js
{
  status: 'error',
  requestedAt: '2023-01-23T03:47:58.449Z',
  message: 'Failed to find data for propertie(s) \'username\'. Twitter may have changed it\'s UI - time to debug!'
}
```

## Debugging

This script uses HTML parsing to get what you need, and is therefore subject to the whims of the web designers at bird company. Here's how you can update

### Handling data retrieval

Edit the `htmlHandlers.js` file if things change up on the bird website UI and data needs to be retrieved otherwise

### Handling repsonse

Edit line 14 of `index.js` to handle the response data as you like. By default the response is simply logged to the console.

### Debug

Set `screenshotPreviewEnabled` to `true` in `config.js` to see what the browser sees.
