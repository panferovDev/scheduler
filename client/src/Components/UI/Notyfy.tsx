import React, { useRef, useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { setNotify } from '../../features/slices/notifySlice';

type ModalProps = {
  children: React.ReactNode;
};

function Notify({ children }: ModalProps): JSX.Element {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(el.current);
    return () => {
      modalRoot.removeChild(el.current);
    };
  }, []);

  return ReactDOM.createPortal(children, el.current);
}

export default function CustomModal(): React.ReactElement | null {
  const message = useAppSelector((state) => state.notify);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timer: number;
    if (message) {
      timer = setTimeout(() => {
        dispatch(setNotify(''));
      }, 3000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [message]);

  if (!message) return null;
  return (
    <Notify>
      <motion.div
        style={{
          position: 'absolute',
          textAlign: 'center',
          maxHeight: '55px',
          top: 0,
          left: 40,
          margin: 'auto',
          right: '80%',
          bottom: 800,
          borderRadius: '6px',
          boxShadow: '12px 11px 16px 9px rgba(34, 60, 80, 0.2)',
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <Alert variant="success">{message}</Alert>
      </motion.div>
    </Notify>
  );
}
