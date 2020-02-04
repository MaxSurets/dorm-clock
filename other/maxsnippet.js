const endpoint = ENDPOINT_BASE + 'home/courses';
    console.log("calling endpoint " + endpoint);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint, true);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader('access-token', getAuthenticationToken());
    xhr.responseType = '';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.LOADING) {

        var curr_index = xhr.responseText.length;
        if (last_index === curr_index) return; 
        console.log("PROGRESS index:", last_index, curr_index);
        //var chunk = xhr.responseText.substring(last_index, curr_index);
        last_index = curr_index;
        //console.log("PROGRESS:",  JSON.parse(chunk));
      } else if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          console.log("DONE");
          dispatch({
            type: actions.ADD_COURSES_SUCCESS,
            items: JSON.parse(xhr.responseText)[0]
          })

        } else {
          console.log(`XHR Failed with status ${xhr.status}: ${xhr.statusText}`);
        }
      }
    };

    xhr.send();
