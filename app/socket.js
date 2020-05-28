exports = module.exports = function (app) {
    const io = require('socket.io')(app);
    const meetingNms = io.of('/meeting');

    meetingNms.on('connection', function (socket) {
        socket.on('defineRoom', (room) => {
            socket.join(room);
        });

        socket.on('updateClients', (request) => {
            meetingNms.in(request.room).emit('refreshClient', request.data);
        });

        socket.on('getData', (room) => {
            meetingNms.in(room).emit('getData');
        });

        socket.on('vote', (request) => {
            meetingNms.in(request.room).emit('addVote', {
                question: request.question,
                action: request.action,
            });
        });
    });
};
