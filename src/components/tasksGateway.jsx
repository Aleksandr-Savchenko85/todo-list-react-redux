const baseUrl = 'https://5fa28679ba0736001613bc44.mockapi.io/Tasks/task';


export const createTask = taskData => {
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData),
  }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to create task'); 
      }
  });
}

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(tasksList => 
        tasksList.map(({ _id, ...task }) => ({ 
          id: _id,
          ...task, 
      })),
    );
};

export const updateTask = (taskId, taskData) => {
      return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      }).then(response => {
          if (!response.ok) {
            throw new Error('Failed to update task');
          }
      }); 
};

export const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
          method: 'DELETE'
        }).then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete task');
          }
    });
}
