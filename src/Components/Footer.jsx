import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border border-1 py-5">
      <div className="container mx-auto px-4 py-8">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p className="m-0 text-sm text-gray-600 dark:text-gray-400">
              © 2024 Portfolio. All rights reserved.
            </p>
          </div>

          <div className="d-flex gap-3">
            <a
              href="https://github.com/hewanzewdie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/hewan-zewdie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={30} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={30} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
