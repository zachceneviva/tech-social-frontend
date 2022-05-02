import { getApiRequest, postApiRequest, putApiRequest, putNoAuthApiRequest, deleteApiRequest } from "./ApiCallHelper";

/**
 * Register a new user
 * @param {Object} params - data
 */
export const registerNewUser = async (params) => {
  try {
    let res = await postApiRequest( "/users/register", params)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

/**
 * Log a user in
 * @param {Object} params 
 */
export const login = async(params) => {
  try {
    let res = await postApiRequest('/users/login', params)
    if (res.data.status === 'failed') return res.data
    localStorage.setItem("uid", res.data.token);
    return res.data
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get specific user profile
 */
export const getUserProfile = async () => {
  try {
    let res = await getApiRequest('/users/profile', '', true)
    return res.data
  } catch(e) {
    console.log(e)
  }
}

/**
 * Update profile
 * @param {String} id - id of document for updates
 * @param {Object} params - data for update
 */
export const updateProfile = async (id, params) => {
  try {
    let res = await putApiRequest("/users", id, params)
    return res.data.updatedUser
  } catch (e) {
    console.log(e)
  }
}

/**
 * get specific user 
 * @param {String} id - id of user
 */
export const getUser = async (id) => {
  try {
    let res = await getApiRequest('/users', id, true)
    return res.data.user
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get specific user posts
 * @param {String} id - id of user 
 */
export const getUserPosts = async (id) => {
  try {
    let res = await getApiRequest('/posts', id)
    return res.data.posts
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get specific user groups
 * @param {String} id 
 */
export const getUserGroups = async(id) => {
  try {
    let res = await getApiRequest('/groups/profile', id)
    return res.data.groups
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get specific user meetups
 * @param {String} id 
 */
export const getUserMeetups = async(id) => {
  try {
    let res = await getApiRequest('/meetups/profile', id)
    return res.data.meetups
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get user connections
 */
export const getUserConnections = async() => {
  try {
    let res = await getApiRequest('/users/profile/connections', null, true)
    return res.data.user
  } catch (e) {
    console.log(e)
  }
}

/**
 * return all users
 */
export const getAllUsers = async () => {
  try {
    let res = await getApiRequest( '/users', null, true)
    return res.data.allUsers
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get all conversations for a user
 * @param {string} id - id of user 
 */
export const getAllConversations = async (id) => {
  try {
    let res = await getApiRequest("/conversations", id )
    return res.data.allConversations
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get a meetup for detail view
 * @param {String} id 
 */
export const getMeetup = async (id) => {
  try {
    let res = await getApiRequest('/meetups', id)
    return res.data.meetup
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get a group for detail view
 * @param {String} id 
 */
 export const getGroup = async (id) => {
  try {
    let res = await getApiRequest('/groups', id)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get all posts
 */
export const getAllPosts = async() => {
  try {
    let res = await getApiRequest('/posts')
    return res.data
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get all groups 
 */
export const getAllGroups = async () => {
  try {
    let res = await getApiRequest('/groups/home')
    return res.data
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get all meetups 
 */
 export const getAllMeetups = async () => {
  try {
    let res = await getApiRequest('/meetups/home')
    return res.data
  } catch (e) {
    console.log(e)
  }
}

/**
 * Create a new post
 * @param {Object} params 
 */
export const createNewPost = async (params) => {
  try {
    let res = await postApiRequest('/posts', params)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

/**
 * Create a new meetup
 * @param {Object} params 
 */
export const createMeetup = async(params) => {
  try {
    let res = await postApiRequest('/meetups',params)
    return res.data
  } catch(e) {
    console.log(e)
  }
}

/**
 * Create a new group
 * @param {Object} params 
 */
 export const createGroup = async(params) => {
  try {
    let res = await postApiRequest('/groups',params)
    return res.data
  } catch(e) {
    console.log(e)
  }
}

/**
 * Get a specific conversation
 * @param {String}} id  
 */
export const getConversation = async(id) => {
  try {
    let res = await getApiRequest('/conversations/find', id)
    return res.data
  } catch(e) {
    console.log(e)
  }
}

/**
 * Get messages from a conversation
 * @param {*} id 
 */
export const getConversationMessages = async (id) => {
  try {
    let res = await getApiRequest('/messages', id)
    return res.data
  } catch(e) {
    console.log(e)
  }
}

/**
 * Create a new message in a conversation
 * @param {Object} params 
 */
export const createNewMessage = async(params) => {
  try {
    let res = await postApiRequest('/messages', params)
    return res.data
  } catch(e) {
    console.log(e)
  }
}

/**
 * Create new conversation
 * @param {Object} params 
 */
export const createNewConversation = async(params) => {
  try {
    let res = await postApiRequest('/conversations', params)
    return res.data
  } catch(e) {
    console.log(e)
  }
}

/**
 * update a meetup
 * @param {String} id 
 * @param {Object} params 
 */
export const updateMeetup = async(id, params) => {
  try {
    let res = await putNoAuthApiRequest('/meetups', id, params)
    return res.data
  } catch(e) {
    console.log(e)
  }
}


/**
 * update a group
 * @param {String} id 
 * @param {Object} params 
 */
 export const updateGroup = async(id, params) => {
  try {
    let res = await putNoAuthApiRequest('/groups', id, params)
    return res.data
  } catch(e) {
    console.log(e)
  }
}

/**
 * Update a post
 * @param {String} id 
 * @param {Object} params  
 */
export const updatePost = async (id, params) => {
  try {
    let res = await putNoAuthApiRequest('/posts', id, params)
    return res.data
  } catch (e) {
    console.log(e)
  }
}


/**
 * Create a new comment
 * @param {Object} params  
 */
export const createComment = async (params) => {
  try {
    let res = await postApiRequest('/comments', params)
    console.log(res.data)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

/**
 * Get comments for a post
 * @param {String} id 
 */
export const getPostComments = async(id) => {
  try {
    let res = await getApiRequest('/comments', id)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

/**
 * delete a post
 * @param {String} id 
 */
export const deletePost = async (id) => {
  try {
    let res = await deleteApiRequest('/posts', id)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const getAllGroupsPage = async () => {
  try {
    let res = await getApiRequest('/groups')
    return res.data
  } catch (e) {
    console.log(e)
  }
}


export const getAllMeetupsPage = async () => {
  try {
    let res = await getApiRequest('/meetups')
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const getGroupMeetups = async(id) => {
  try {
    let res = await getApiRequest('/meetups/groups', id)
    return res.data
  } catch (e) {
    console.log(e)
  }
}