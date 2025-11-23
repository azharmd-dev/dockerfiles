ARG VERSION
FROM almalinux:${VERSION:-9}
ARG Name="Azhar" \
    City="Hyderabad"
ENV Name=${Name}
RUN echo "Candidate details: ${Name}, City: ${City}"
CMD [ "sleep", "1000"]