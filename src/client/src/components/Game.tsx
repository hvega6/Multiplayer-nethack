import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Game: React.FC = () => {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <div>
      <h2>Nethack-inspired Game</h2>
      {/* Add game components here */}
    </div>
  );
};

export default Game;
