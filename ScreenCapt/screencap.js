

// In order record the screen with system audio
var recording = navigator.mediaDevices.getDisplayMedia({video: {mediaSource: 'screen',},audio: true,})
    .then(async (e) => {

        // Gravação de áudio
        let audio = await navigator.mediaDevices.getUserMedia({audio: true, video: false })

        // Atribui a stream de video ao objeto do video: srcObject 
        video.srcObject = e;

        // Combina video/audio stream com o objeto MediaStream
        let combine = new MediaStream([...e.getTracks(), ...audio.getTracks()])

        /* Record the captured mediastream
           with MediaRecorder constructor */
        let recorder = new MediaRecorder(combine);

        start.addEventListener('click', (e) => {

            // Starts the recording when clicked
            recorder.start();
            alert("recording started")

            // For a fresh start
            data = []
        });

        stop.addEventListener('click', (e) => {

            // Stops the recording  
            recorder.stop();
            alert("recording stopped")
        });

        /* Push the recorded data to data array 
          when data available */
        recorder.ondataavailable = (e) => {
            data.push(e.data);
        };

        recorder.onstop = () => {

            /* Convert the recorded audio to 
               blob type mp4 media */
            let blobData = new Blob(data, { type: 'video/mp4' });

            // Convert the blob data to a url
            let url = URL.createObjectURL(blobData)

            // Assign the url to the output video tag and anchor 
            output.src = url
            anc.href = url
        };
    });