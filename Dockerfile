FROM alpine:3.13

# Environment variables
# Set build directory
WORKDIR /tmp

# Copy files necessary for build

COPY requirements.txt requirements.txt

# Perform build and cleanup artifacts and caches
RUN \
  apk upgrade --update-cache -a \
  && apk add --no-cache git python3 py-pip \
  && pip install -r requirements.txt

# Set working directory
WORKDIR /docs

# Expose MkDocs development server port
EXPOSE 8000

# Start development server by default
ENTRYPOINT ["mkdocs"]
CMD ["serve", "--livereload", "--watch-theme", "--dev-addr=0.0.0.0:8000"]
